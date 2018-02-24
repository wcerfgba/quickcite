import * as fs from 'fs';
import * as async from 'async';
import * as _ from 'lodash';
import glob from 'glob';

const main = (cb) => async.waterfall(
  [
    loadSrcFiles,
    makeReplacements,
    writeDistFiles,
  ],
  cb
);

const loadSrcFiles = (cb) => glob(
  'src/**/*.js',
  (err, matches) => async.map(
    matches,
    (match, cb) => fs.readFile(
      match,
      'utf8',
      (err, data) => cb(null, {
        lines: data.split('\n'),
        name: dropFirstComponent(match),
      })
    ),
    cb
  )
);

const dropFirstComponent = (path) => path.split('/').slice(1).join('/');

const makeReplacements = (files, cb) => async.map(
  files,
  (file, cb) => cb(null, {
    ...file,
    data: _.flatMap(
      file.lines,
      (line) => replaceLine(line, files)
    ).join('\n')
  }),
  cb
);

const replaceLine = (line, files) => {
  const match = line.match(/#### (.*) ####/);
  if (match === null) return line;
  return files.find(file => file.name === match[1]).lines;
};

const writeDistFiles = (files, cb) => async.map(
  files,
  (file, cb) => fs.writeFile(
    `dist/${file.name}`,
    file.data,
    cb
  ),
  cb
);

if (require.main === module) {
  main(console.log);
}

#!/usr/bin/env node

'use strict';


var fs = require('fs'),
	path = require('path'),
	userArgs = process.argv.slice(2),
	action = userArgs[0],
	type = userArgs[1],
	filePath = userArgs[2],
	nameSplited = [],
	name = '';

console.log(filePath);

if (action && action === 'generate') {
	if (type && type === 'widget') {
		if (filePath) {
			fs.mkdir(filePath, function (err) {
				if(err) {
					console.log(err);
				}
				else {
					fs.mkdir(filePath + '/v1', function (err) {
						if(err) {
							console.log(err);
						}
						else {
							console.log("The FOLDER was saved!");

							nameSplited = filePath.split('\\');
							name = nameSplited.length ? nameSplited[nameSplited.length - 1] : filePath;

							fs.readFile(path.resolve(__dirname, '../template/widget/widget.js'), 'utf8', function (err, data) {
								if (err) {
									return console.log(err);
								}

								data = replaceAll(data, '${name}', name);

								fs.writeFile(filePath + '/v1/' + name + '.js', data, function (err) {
									if(err) {
										console.log(err);
									}
									else {
										console.log("The JS FILE was saved!");
									}
								});
							});

							fs.readFile(path.resolve(__dirname, '../template/widget/widget.html'), 'utf8', function (err, data) {
								if (err) {
									return console.log(err);
								}

								data = replaceAll(data, '${name}', name);

								fs.writeFile(filePath + '/v1/' + name + '.html', data, function (err) {
									if(err) {
										console.log(err);
									}
									else {
										console.log("The HTML FILE was saved!");
									}
								});
							});
						}
					});
				}
			});
		}
	}
}
else {
	console.log(action + ' is not valid');
}


function escapeRegExp (string) {
	return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}


function replaceAll (string, find, replace) {
	return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
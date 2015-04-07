# grunt-tsconfig

> Creates typescript tsconfig.json based on options and fileGlobs.

## Getting Started
This plugin requires Grunt `~0.4.5`. I guess you know how to use Grunt, if you've come this far...

## The "tsconfig" task

### Overview
In your project's Gruntfile, add a section named `tsconfig` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
	tsconfig: {
		make:{
			options: {
				/* The main feature is to put files in your tsconfig.json file based on this filesGlob... */
				filesGlob: [
					'components/app.ts',
					'components/**/*.module.ts',
					'components/**/*.ts',
					'!components/**/*.spec.ts'
				],
			
				/* Anything else added will be put into the tsconfig.json file */
				compilerOptions:{
					"module": "commonjs",
					"noImplicitAny": true,
					"removeComments": true,
					"preserveConstEnums": true,
					"out": "../../built/local/tsc.js",
					"sourceMap": true
				}

			}
		}
	}
	//...
});
```

## Contributing
Issues and pull-requests are appreciated. Reach out on twitter @filipbech for questions.

## Release History

0.1.0 Initial release 

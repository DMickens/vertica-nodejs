# vertica-nodejs

<!-- NPM package when published -->
<!-- NPM downloads when published -->

[![License](https://img.shields.io/badge/License-Apache%202.0-orange.svg)](https://opensource.org/licenses/Apache-2.0)


*vertica-nodejs* is a native Javascript client for the Vertica (http://www.vertica.com) database. 

## DISCLAIMER: 
vertica-nodejs is still pre-release and actively being improved. As of 6/22/22 this is not intended for use in production environments. 

Please check out [release notes](https://github.com/vertica/vertica-nodejs/releases) to learn about the latest improvements.

vertica-python has been tested with Vertica 12.0 and Node.js 14/16. Feel free to submit issues and/or pull requests (Read up on our [contributing guidelines](#contributing-guidelines)).


## Documentation

Each package in this repo should have its own readme more focused on how to develop/contribute. To get started developing with this package, we recommend starting [here](https://github.com/vertica/vertica-nodejs/packages/vertica-nodejs/README.md)

## Installation
    To install vertica-nodejs with npm: 
        '''npm install vertica-nodejs'''

  <!-- To use vertica-nodejs linked locally from source (not recommended in production): ``` TO DO - Take notes from http://confluence.verticacorp.com/display/DEV/Node.js+Development+Resources``` -->


### Features <!-- Do we want to include this still? If so, add Vertica specfic features not exclusive to this driver ??? -->

- Pure JavaScript client
- Connection pooling
- Extensible JS ↔ Vertica data-type coercion

## Support

vertica-nodejs is free software. If you encounter a bug with the library please open an issue on the [GitHub repo](https://github.com/vertica/vertica-nodejs). If you have questions unanswered by the documentation, ensure it is not covered in individual package documentation. If it is still unclear, please open an issue pointing out how the documentation was unclear and we will address it as needed. 

When you open an issue please provide:

- version of Node
- version of Vertica
- smallest possible snippet of code to reproduce the problem


## Contributing

Outside contributions to this project are greatly appreciated. Following standard Vertica open source practices, please see [CONTRIBUTING.md](CONTRIBUTING.md)


### Setting up for local development

1. Clone the repo
2. From your workspace root run `yarn` and then `yarn lerna bootstrap`
3. Ensure you have a Vertica instance running 
4. Ensure you have the proper environment variables configured for connecting to the instance (V_HOST, V_PORT, V_USER, V_PASSWORD, V_DATABASE, V_BACKUP_SERVER_NODE)
5. Run `yarn test` to run all the tests, or run `yarn test` from within an individual package to only run that package's tests. 

## Troubleshooting and FAQ

The causes and solutions to common errors can be found among the [Frequently Asked Questions (FAQ)](https://github.com/vertica/vertica-nodejs/wiki/FAQ)

## License

<<<<<<< HEAD
See [License](https;//github.com/vertica/vertica-nodejs/LICENSE)
=======
Apache 2.0 License, please see [LICENSE](LICENSE) for details.
>>>>>>> ca9a0a3772009f4032db34a898531f97e6ebc55e

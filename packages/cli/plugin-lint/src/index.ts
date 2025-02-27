import type { CliPlugin } from '@modern-js/core';
import { logger } from '@modern-js/utils/logger';
import lint from './lint';

export default (): CliPlugin => ({
  name: '@modern-js/plugin-lint',
  setup: () => {
    return {
      commands({ program }) {
        program
          .command('lint [...files]')
          .allowUnknownOption()
          .description('lint and fix source files')
          .option('--no-fix', 'disable auto fix source file')
          .action(() => {
            lint();
          });

        // @deprecated
        // Can be removed in the next major version
        program
          .command('pre-commit')
          .description('Deprecated')
          .action(() => {
            logger.warn(
              'The "modern pre-commit" command is deprecated, please use "lint-staged" instead.',
            );
          });
      },
    };
  },
});

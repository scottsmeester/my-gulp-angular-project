(function() {
  'use strict';

  angular
    .module('myGulpAngularProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

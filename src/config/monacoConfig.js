if (typeof window !== 'undefined') {
  window.MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
      if (label === 'typescript' || label === 'javascript') {
        return '/assets/ts.worker.js';
      }
      if (label === 'css') {
        return '/assets/css.worker.js';
      }
      if (label === 'html') {
        return '/assets/html.worker.js';
      }
      if (label === 'json') {
        return '/assets/json.worker.js';
      }
      return '/assets/editor.worker.js';
    },
  };
}
defaultFooter = {
  text: "2024 &copy; taobook. "
};

(function () {
  var myPlugin = function (hook, vm) {
    footerText = defaultFooter.text;
    if(vm.config.footer) {
        footerText = vm.config.footer.text;
    }

    hook.init(function () {
      // ...
    });

    // Invoked one time when the docsify instance has mounted on the DOM
    hook.mounted(function () {
      // ...
    });

    // Invoked on each page load before new markdown is transformed to HTML.
    // Supports asynchronous tasks (see beforeEach documentation for details).
    hook.beforeEach(function (markdown) {
      // ...
      return markdown;
    });

    // Invoked on each page load after new markdown has been transformed to HTML.
    // Supports asynchronous tasks (see afterEach documentation for details).
    hook.afterEach(function (html) {
      // ...
      var url =
                  'https://github.com/taobook/leetcode/blob/main' +
                  vm.route.path
                  +".md";

      // Invoked one time when docsify script is initialized
      var footer = vm.route.path=='/'?'':[
        '<hr/>',
        '<footer>',
        '<span>'+footerText+'</span>',
        '<a target="_blank" href="'+url+'">[Edit]</a>',
        '</footer>',
      ].join('');
      return html + footer;
    });

    // Invoked on each page load after new HTML has been appended to the DOM
    hook.doneEach(function () {
      // ...
    });

    // Invoked one time after rendering the initial page
    hook.ready(function () {
      // ...
    });
  };

  // Add plugin to docsify's plugin array
  $docsify = $docsify || {};
  $docsify.plugins = [].concat(myPlugin, $docsify.plugins || []);
})();
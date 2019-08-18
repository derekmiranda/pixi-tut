(function(window) {
  function KeyboardManager() {
    this.vx = 0;
    this.vy = 0;

    this.downListener = this.downListener.bind(this);
    this.upListener = this.upListener.bind(this);
  }

  // each direction:
  // down - sets vx/vy
  // up - resets vx/vy
  KeyboardManager.prototype.downListener = function(event) {
    switch (event.key) {
      case "ArrowLeft":
        this.vx = -1;
        break;
      case "ArrowRight":
        this.vx = 1;
        break;
      case "ArrowDown":
        this.vy = 1;
        break;
      case "ArrowUp":
        this.vy = -1;
        break;
    }
  };

  KeyboardManager.prototype.upListener = function(event) {
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowRight":
        this.vx = 0;
        break;
      case "ArrowDown":
      case "ArrowUp":
        this.vy = 0;
        break;
    }
  };

  window.KeyboardManager = KeyboardManager;
})(window);

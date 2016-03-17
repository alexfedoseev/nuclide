Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var _reactForAtom = require('react-for-atom');

var SPINNER = '';

var StatusBarTileComponent = (function (_React$Component) {
  _inherits(StatusBarTileComponent, _React$Component);

  function StatusBarTileComponent(props) {
    _classCallCheck(this, StatusBarTileComponent);

    _get(Object.getPrototypeOf(StatusBarTileComponent.prototype), 'constructor', this).call(this, props);
  }

  _createClass(StatusBarTileComponent, [{
    key: 'render',
    value: function render() {
      var classes = ['nuclide-busy-signal-status-bar'];
      if (this.props.busy) {
        classes.push('nuclide-busy-signal-status-bar-busy');
      } else {
        classes.push('nuclide-busy-signal-status-bar-idle');
      }
      return _reactForAtom.React.createElement(
        'div',
        { className: classes.join(' ') },
        SPINNER
      );
    }
  }]);

  return StatusBarTileComponent;
})(_reactForAtom.React.Component);

exports.StatusBarTileComponent = StatusBarTileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0YXR1c0JhclRpbGVDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBV29CLGdCQUFnQjs7QUFNcEMsSUFBTSxPQUFPLEdBQUcsR0FBUSxDQUFDOztJQUVaLHNCQUFzQjtZQUF0QixzQkFBc0I7O0FBR3RCLFdBSEEsc0JBQXNCLENBR3JCLEtBQVksRUFBRTswQkFIZixzQkFBc0I7O0FBSS9CLCtCQUpTLHNCQUFzQiw2Q0FJekIsS0FBSyxFQUFFO0dBQ2Q7O2VBTFUsc0JBQXNCOztXQU8zQixrQkFBaUI7QUFDckIsVUFBTSxPQUFPLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ25ELFVBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7QUFDbkIsZUFBTyxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO09BQ3JELE1BQU07QUFDTCxlQUFPLENBQUMsSUFBSSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7T0FDckQ7QUFDRCxhQUNFOztVQUFLLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxBQUFDO1FBQUUsT0FBTztPQUFPLENBQ2xEO0tBQ0g7OztTQWpCVSxzQkFBc0I7R0FBUyxvQkFBTSxTQUFTIiwiZmlsZSI6IlN0YXR1c0JhclRpbGVDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcbi8qIEBmbG93ICovXG5cbi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgbGljZW5zZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluXG4gKiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQge1JlYWN0fSBmcm9tICdyZWFjdC1mb3ItYXRvbSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGJ1c3k6IGJvb2xlYW47XG59XG5cbmNvbnN0IFNQSU5ORVIgPSAnXFx1RjA4Nyc7XG5cbmV4cG9ydCBjbGFzcyBTdGF0dXNCYXJUaWxlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcHJvcHM6IFByb3BzO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdEVsZW1lbnQge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbJ251Y2xpZGUtYnVzeS1zaWduYWwtc3RhdHVzLWJhciddO1xuICAgIGlmICh0aGlzLnByb3BzLmJ1c3kpIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnbnVjbGlkZS1idXN5LXNpZ25hbC1zdGF0dXMtYmFyLWJ1c3knKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdudWNsaWRlLWJ1c3ktc2lnbmFsLXN0YXR1cy1iYXItaWRsZScpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuam9pbignICcpfT57U1BJTk5FUn08L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=
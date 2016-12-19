/* global suite test assert internalScope */
(function () {
  var InvalidArgument = internalScope.InvalidArgument;
  var toTransform = internalScope.toTransform;

  suite('toTransform', function () {
    test('convertTranslate', function () {
      assert.equal(toTransform({translate: 'none'}), 'translate3d(0px, 0px, 0px)');
      assert.equal(toTransform({translate: '0.6px'}), 'translate3d(0.6px, 0px, 0px)');
      assert.equal(toTransform({translate: '50px'}), 'translate3d(50px, 0px, 0px)');
      assert.equal(toTransform({translate: '20px 30px'}), 'translate3d(20px, 30px, 0px)');
      assert.equal(toTransform({translate: '20px 30px 90px'}), 'translate3d(20px, 30px, 90px)');
    });

    test('convertRotate', function () {
      // assert.throws(function () {
      //   toTransform({rotate: '20 10'});
      // }, InvalidArgument);

      // assert.throws(function () {
      //   toTransform({rotate: ''});
      // }, InvalidArgument);

      // assert.throws(function () {
      //   toTransform({rotate: 'garbage'});
      // }, InvalidArgument);

      // assert.throws(function () {
      //   toTransform({rotate: '300degrees'});
      // }, InvalidArgument);

      // assert.throws(function () {
      //   toTransform({rotate: 'threedegrees'});
      // }, InvalidArgument);

      // assert.throws(function () {
      //   toTransform({rotate: '10 hello 20 30deg'});
      // }, InvalidArgument);

      // assert.throws(function () {
      //   toTransform({rotate: 'garbagedeg'});
      // }, InvalidArgument);

      // assert.equal(toTransform({rotate: 'none'}), 'none');
      // assert.equal(toTransform({rotate: '50 10 30 100rad'}), 'rotate3d(50, 10, 30, 100rad)');
      // assert.equal(toTransform({rotate: '360turn'}), 'rotate(360turn)');
      // assert.equal(toTransform({rotate: '200deg'}), 'rotate(200deg)');
      // assert.equal(toTransform({rotate: '20grad'}), 'rotate(20grad)');
      // assert.equal(toTransform({rotate: '164rad'}), 'rotate(164rad)');
    });

    test('convertScale', function () {
      /*assert.throws(function () {
        toTransform({scale: ''});
      }, InvalidArgument);

      assert.throws(function () {
        toTransform({scale: 'a'});
      }, InvalidArgument);

      assert.throws(function () {
        toTransform({scale: '2 a'});
      }, InvalidArgument);

      assert.throws(function () {
        toTransform({scale: '2 3 4 5'});
      }, InvalidArgument);

      assert.equal(toTransform({scale: 'none'}), 'scale3d(1, 1, 1)');

      assert.equal(toTransform({scale: '2'}), 'scale3d(2, 1, 1)');
      assert.equal(toTransform({scale: '2 3'}), 'scale3d(2, 3, 1)');
      assert.equal(toTransform({scale: '2 3 4'}), 'scale3d(2, 3, 4)');*/
    });
  });
})();

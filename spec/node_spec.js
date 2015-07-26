var Node = require('./../public/javascripts/lib/node');

var body;

describe("Node", function () {
  beforeEach(function () {
    body = new Node(null, 'body', 1, 1);
  });

  describe("Initialization", function () {
    it("has a depth", function () {
      expect(body.depth).toEqual(1);
    });
    it('has an id', function () {
      expect(body.nodeId).toEqual(1);
    });
    it('has an element type', function () {
      expect(body.tagName).toEqual('body');
    });
    it('has a parent element', function () {
      expect(body.parent).toEqual(null);
    });
  });
  describe("Building Children", function () {
    var body = new Node(null, 'body', 1, 1);
    div = new Node(body, 'div');
    p = new Node(div, 'p');
    it('has a depth one greater than its parent node', function () {
      expect(div.depth).toEqual(div.parent.depth + 1);
    });
    it('is a child of its parent', function () {
      expect(body.children[0]).toEqual(div);
    });
  });
});

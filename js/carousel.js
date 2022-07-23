$(".multi-item-carousel").carousel({
  interval: false,
});

$(".multi-item-carousel .item").each(function () {
  var dom_nodes = $($.parseHTML('<div class="row"></div>'));
  var next = $(this).next();

  if (!next.length) {
    next = $(this).siblings(":first");
  }
  if (next.children(":first-child").hasClass("row")) {
    next
      .children(":first-child")
      .children(":first-child")
      .clone()
      .appendTo(dom_nodes);
  } else {
    next.children(":first-child").clone().appendTo(dom_nodes);
  }
  if (next.next().length > 0) {
    if (next.next().children(":first-child").hasClass("row")) {
      next
        .next()
        .children(":first-child")
        .children(":first-child")
        .clone()
        .appendTo(dom_nodes);
    } else {
      next.next().children(":first-child").clone().appendTo(dom_nodes);
    }
  } else {
    $(this)
      .siblings(":first")
      .children(":first-child")
      .children(":first-child")
      .clone()
      .appendTo(dom_nodes);
  }
  $(this).children(":first-child").prependTo(dom_nodes);
  dom_nodes.appendTo($(this));
});

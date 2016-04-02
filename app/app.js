$(function() {

  Office.initialize = function(reason) {};

  $("button").click(function() {
    insertEmersonQuoteAtSelection();
  });
});

function insertEmersonQuoteAtSelection() {
  Word.run(function(context) {

    // Create a proxy object for the document.
    var thisDocument = context.document;

    // Queue a command to get the current selection.
    // Create a proxy range object for the selection.
    var range = thisDocument.getSelection();

    // Queue a command to replace the selected text.
    range.insertText('This updated text is inserted from add-in. Cool, huh?\n', Word.InsertLocation.replace);

    // Synchronize the document state by executing the queued commands,
    // and return a promise to indicate task completion.
    return context.sync().then(function() {
      $("#log").text('Text inserted');
    });
  })
    .catch(function(error) {
      $("#log").text('Error: ' + JSON.stringify(error));
    });
}
const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Question Model
 * ==========
 */
const Question = new keystone.List('Question');

Question.add({
    name: { type: Types.Text, initial: true, required: true},
    question: { type: Types.Text, initial: true, required: true },
    type: { type: Types.Select, options:['Checkboxes', 'Radio', 'Textarea', 'Scale'], default:'Radio', intial: true, required: true },
    module: { type: Types.Relationship, ref: 'Module'},
    answers: { type: Types.TextArray }
});

Question.relationship({ ref: 'Answer', refPath: 'questionId'});

Question.register();
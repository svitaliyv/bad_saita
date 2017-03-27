const express = require('express');
const router = express.Router();
const _ = require('lodash');

const questions = require('../questions.json');
const questionsDict = _.keyBy(questions, 'id');

module.exports = app => {

    router.get('/check', function(req, res) {
        let query = req.query;
        let questionId = query.questionId;
        let userAnswerIds = query.answerIds;
        let question = questionsDict[questionId];

        console.log(question, userAnswerIds, questionId);

        if (!questionId || !userAnswerIds || !question) {
            return res.json({ success: false });
        }

        userAnswerIds = userAnswerIds.split(',').map(x => parseInt(x, 10));

        let isRight = _.isEmpty(_.difference(userAnswerIds, question.answer.ids));
        let points = isRight ? question.answer.points : 0;

        return res.json({ success: true, result: { points, isRight } });
    });

    router.get('/', (req, res) => {
        return res.json({ success: true, questions: _.map(questions, q => _.omit(q, 'answer')) });
    });

    return router;
};
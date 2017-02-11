const express = require('express');
const router = express.Router();
const _ = require('lodash');

const questions = require('../questions.json');
const questionsDict = _.keyBy(questions, 'id');

module.exports = app => {

    router.get('/check', function(req, res) {
        let query = req.query;
        let questionId = query.questionId;
        let userAnswerId = query.answerId;
        let question = questionsDict[questionId];

        if (!questionId || !userAnswerId || !question) {
            return res.json({ success: false });
        }

        let isRight = userAnswerId == question.answer.id;
        let points = isRight ? question.answer.points : 0;

        return res.json({ success: true, result: { points: points, isRight: isRight } });
    });

    router.get('/', (req, res) => {
        return res.json({ success: true, questions: _.map(questions, q => _.omit(q, 'answer')) });
    });

    return router;
};
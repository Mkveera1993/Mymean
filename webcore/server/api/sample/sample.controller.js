'use strict';

var _ = require('lodash');
var Sample = require('./sample.model');

function handleError(res, err) {
    return res.status(500).send(err);
}

/**
 * Get list of Sample
 *
 * @param req
 * @param res
 */
exports.index = function(req, res) {

    Sample.find(function(err, samples) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(samples);
    });
};



/**
 * Get a single Sample
 *
 * @param req
 * @param res
 */
exports.show = function(req, res) {
    Sample.findById(req.params.id, function(err, sample) {
        if (err) {
            return handleError(res, err);
        }
        if (!sample) {
            return res.status(404).end();
        }
        return res.status(200).json(sample);
    });
};

/**
 * Creates a new Sample in the DB.
 *
 * @param req
 * @param res
 */
exports.create = function(req, res) {
    Sample.create(req.body.sample, function(err, sample) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(201).json(sample);
    });
};

/**
 * Updates an existing Sample in the DB.
 *
 * @param req
 * @param res
 */
exports.update = function(req, res) {
    Sample.findById(req.params.id, function(err, sample) {
        if (err) {
            return handleError(res, err);
        }
        if (!sample) {
            return res.status(404).end();
        }
        var updated = _.merge(sample, req.body.sample);
        updated.save(function(err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(200).json(sample);
        });
    });
};

/**
 * Deletes a Sample from the DB.
 *
 * @param req
 * @param res
 */
exports.destroy = function(req, res) {
    Sample.findById(req.params.id, function(err, sample) {
        if (err) {
            return handleError(res, err);
        }
        if (!sample) {
            return res.status(404).end();
        }
        sample.remove(function(err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(204).end();
        });
    });
};
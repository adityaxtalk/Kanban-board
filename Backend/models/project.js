const mongoose = require("mongoose");

const project = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    description: String,
    task: [
        {
            id: Number,
            title: String,
            description: String,
            order: Number,
            stage: String,
            index: Number,
            attachment: [
                {type: String, url: String}
            ],
            created_at: {type: Date, default: Date.now},
            updated_at: {type: Date, default: Date.now}
        }
    ]
}, {timestamps: true});

const Project = mongoose.model("Project", project);
module.exports = Project;
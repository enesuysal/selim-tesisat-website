"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = require("../models");
const MONGODB_URI = 'mongodb+srv://enesuysal:gezEHCEx1Jsxds4X@selimdb.x4clf62.mongodb.net/';
async function getPortfolioIds() {
    try {
        await mongoose_1.default.connect(MONGODB_URI);
        console.log('Connected to MongoDB Atlas');
        const portfolios = await models_1.Portfolio.find({}).select('_id title').limit(5);
        console.log('Portfolio IDs:');
        portfolios.forEach(p => {
            console.log(`${p._id} - ${p.title}`);
        });
    }
    catch (error) {
        console.error('Error:', error);
    }
    finally {
        await mongoose_1.default.disconnect();
    }
}
getPortfolioIds();
//# sourceMappingURL=get-portfolio-ids.js.map
const connectDB = require('./connectDB');
const mongoose = require('mongoose');
const ChatTest = require('../models/ChatTest');
const User = require('../models/users');
const Post = require('../models/posts');


describe('connectDB Testing', () => {
    beforeAll(async () => {
        const db = require('../config/db');
        mongoose.connect(db.mongoTestUri);
        const dbConnection = mongoose.connection;
    
        // if ERROR
        dbConnection.on('error', console.error.bind(console, 'connection error:'));
        dbConnection.once('open', () => {
            console.log('Database connection!!');
        });
    
        await connectDB.postDB(ChatTest, {body: 'database'});
        const user = await connectDB.postDB(User, {username: 'panupong'});
        const post = await connectDB.postDB(Post, {Caption: 'thank you'});

        post.userId = user;
        await post.save();
        await user.posts.push(post);
        await user.save();

        const users = await connectDB.getDB(User);
        const posts = await connectDB.getDB(Post);


      });
      
    afterAll(async () => {
        const { chattests, users, posts } = mongoose.connection.collections;
    
        await chattests.drop();
        await users.drop();
        await posts.drop();
    })
    
    it('GetDB is Working', async () => {
        expect.assertions(1);
        const chats = await connectDB.getDB(ChatTest);
        expect(chats.length).toBe(1);
    });

    it('getDBByElement is Working', async () => {
        expect.assertions(1);
        const chats = await connectDB.getDBByElement(ChatTest, { body: 'database' });
        expect(chats.length).toBe(1);
    });

    it('getDBById is Working', async () => {
        expect.assertions(1);
        const chat = await connectDB.postDB(ChatTest, {body: 'yuuzoo'});
        const testdata = await connectDB.getDBById(ChatTest, chat._id);
        expect(typeof testdata).toBe('object');
    });

    it('postDB is Working', async () => {
        expect.assertions(1);
        const chat = await connectDB.postDB(ChatTest, {body: 'database'});
        expect(typeof chat).toBe('object');
    });

    it('removeDB is Working', async () => {
        expect.assertions(1);
        await connectDB.removeDB(ChatTest, {body: 'database'});
        const chats = await connectDB.getDBByElement(ChatTest, {body: 'database'});
        expect(chats.length).toBe(0);
    });

    it('updateDBById is Working', async () => {
        const chat = await connectDB.postDB(ChatTest, {body: 'yuuzoo'});
        expect.assertions(1);
        const chatUpdate = await connectDB.updateDBById(ChatTest, chat._id, {body: 'update'});
        expect(chatUpdate.body).toBe('update');
    });

    it('hashMany is Working', async () => {
        const users = await connectDB.getDBByElement(User, {username: 'panupong'});
        const posts = await connectDB.hashMany(User, users[0]._id, 'posts');
        expect(posts.length).toBe(1);
    });
    
    
    
})




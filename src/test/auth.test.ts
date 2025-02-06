import request from 'supertest';
import app from '../server';
import { User } from '../models';

describe('Authentication Routes', () => {
    beforeAll(async () => {
        // Initialize database or create any necessary test data
        await User.destroy({ where: { email: 'testuser@example.com' } });
    });

    afterEach(async () => {
        // await User.destroy({ where: { email: 'testuser@example.com' } });
    });

    it('should register a new user', async () => {
        const res = await request(app)
            .post('/api/register')
            .send({
                username: 'testuser',
                email: 'testuser@example.com',
                password: 'password123',
            });

        expect(res.status).toBe(201);
        expect(res.body.message).toBe('Berhasil membuat akun baru.');
    });

    it('should log in a user', async () => {
        const res = await request(app)
            .post('/api/login')
            .send({
                email: 'testuser@example.com',
                password: 'password123',
            });

        expect(res.status).toBe(200);
        expect(res.body.message).toBe("Berhasil melakukan login.");
    });
});

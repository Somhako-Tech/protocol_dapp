import { User } from "../constants/types";

export default function PostgresAdapter(client: any, options = {}) {
    return {
        async createUser(user: any) {
            try {
                console.log(user);
                const sql = `
        INSERT INTO users (name, email, email_verified, image, is_admin) 
        VALUES ($1, $2, $3, $4, $5) 
        RETURNING id, name, email, email_verified, image`;
                let result = await client.query(sql, [
                    user.name,
                    user.email,
                    user.email_verified,
                    user.image,
                    false,
                ]);
                console.log(result);
                return result.rows[0];
            } catch (err) {
                console.log(err);
                return false;
            }
        },
        async getUser(id: any) {
            try {
                const sql = `select * from users where id = $1`;
                let result = await client.query(sql, [id]);
                return result.rows[0];
            } catch (err) {
                console.log(err);
                return;
            }
        },
        async getUserByEmail(email: any) {
            try {
                const sql = `select * from users where email = $1`;
                let result = await client.query(sql, [email]);
                return result.rows[0];
            } catch (err) {
                console.log(err);
                return;
            }
        },
        async getUserByAccount({
            providerAccountId,
            provider,
        }: {
            providerAccountId: string;
            provider: any;
        }) {
            try {
                const sql = `
          select u.* from users u join accounts a on u.id = a.user_id 
          where 
          a.provider_id = $1 
          and 
          a.provider_account_id = $2`;

                const result = await client.query(sql, [
                    provider,
                    providerAccountId,
                ]);
                return result.rows[0];
            } catch (err) {
                console.log(err);
            }
        },
        async updateUser(user: any) {
            try {
            } catch (err) {
                console.log(err);
                return false;
            }
        },
        async linkAccount(account: {
            userId: any;
            provider: any;
            type: any;
            providerAccountId: any;
            access_token: any;
            expires_at: any;
        }) {
            try {
                const sql = `
        insert into accounts 
        (
          user_id, 
          provider_id, 
          provider_type, 
          provider_account_id, 
          access_token,
          access_token_expires
        )
        values ($1, $2, $3, $4, $5, to_timestamp($6))`;

                const params = [
                    account.userId,
                    account.provider,
                    account.type,
                    account.providerAccountId,
                    account.access_token,
                    account.expires_at,
                ];

                await client.query(sql, params);
                return account;
            } catch (err) {
                console.log(err);
                return;
            }
        },
        async createSession({
            sessionToken,
            userId,
            expires,
        }: {
            sessionToken: string;
            userId: string;
            expires: string;
        }) {
            try {
                const sql = `insert into sessions (user_id, expires, session_token) values ($1, $2, $3)`;
                await client.query(sql, [userId, expires, sessionToken]);
                return { sessionToken, userId, expires };
            } catch (err) {
                console.log(err);
                return;
            }
        },
        async getSessionAndUser(sessionToken: any) {
            try {
                let result;
                result = await client.query(
                    "select * from sessions where session_token = $1",
                    [sessionToken]
                );

                let session = result.rows[0];

                result = await client.query(
                    "select * from users where id = $1",
                    [session.user_id]
                );
                let user = result.rows[0];

                return {
                    session,
                    user,
                };
            } catch (err) {
                console.log(err);
                return;
            }
        },
        async updateSession({ sessionToken }: { sessionToken: string }) {
            console.log("updateSession", sessionToken);
            return;
        },
        async deleteSession(sessionToken: any) {
            try {
                const sql = `delete from sessions where session_token = $1`;
                await client.query(sql, [sessionToken]);
            } catch (err) {
                console.log(err);
                return;
            }
        },
    };
}

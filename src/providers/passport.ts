import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';

import { secrets } from '@config/secrets';

import { User as UserEntity } from '../entities/User';
import { mongooseUsersRepository as User } from '../repositories/implementations/MongooseUsersRepository';

passport.serializeUser((user: UserEntity, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(new GoogleStrategy.Strategy(
  {
    clientID: secrets.googleClientID,
    clientSecret: secrets.googleClientSecret,
    callbackURL: secrets.googleCallbackURL,
    proxy: true,
  },
  async (accessToken, refreshToken, profile, done) => {
    let user = await User.findByGoogleId(profile.id);

    if (!user) {
      const newUser = new UserEntity({ googleId: profile.id });
      user = await User.save(newUser);
    }

    done(null, user);
  },
));

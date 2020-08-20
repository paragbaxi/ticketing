import mongoose from 'mongoose';
import { PasswordManager } from '../services/password-manager';

// Required to create a new User
interface userAttrs {
  email: string;
  password: string;
}

// User Model
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: userAttrs): UserDoc;
}

// User Document
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      versionKey: false,
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
      },
    },
  }
);

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await PasswordManager.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

userSchema.statics.build = (attrs: userAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

const buildUser = (attrs: userAttrs) => {
  return new User(attrs);
};

export { User };

// const UserModel = mongoose.model('User', userSchema);

// class User extends UserModel {
//   constructor(attrs: UserAttrs) {
//     super(attrs);
//   }
// }

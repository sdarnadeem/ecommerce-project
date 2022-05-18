// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";

// import connectToDatabase from "../../utils/db";
// import User from "../../models/userModel";

// export default NextAuth({
//   session: {
//     jwt: true,
//   },
//   providers: [
//     Providers.Credentials({
//       async authorize(credentials) {
//         const client = await connectToDatabase();

//         const user = await User.findOne({
//           email: credentials.email,
//         });

//         if (!user) {
//           client.close();
//           throw new Error("No user found!");
//         }

//         const isValid = await user.correctPassword(
//           credentials.password,
//           user.password
//         );

//         if (!isValid) {
//           client.close();
//           throw new Error("Could not log you in!");
//         }

//         client.close();
//         return { email: user.email };
//       },
//     }),
//   ],
// });

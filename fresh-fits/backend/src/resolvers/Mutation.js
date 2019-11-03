const Mutation = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );
    return item;
  }
};

module.exports = Mutation;

// createDog(parent, args, ctx, info) {
//   global.dogs = global.dogs || [];
//   // TODO: create a dog
//   const newDog = { name: args.name };
//   global.dogs.push(newDog);
//   return newDog;
// },

import * as TypeGraphQL from "type-graphql";
import { Mint } from "../../../models/Mint";
import { Profile } from "../../../models/Profile";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Mint)
export class MintRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() mint: Mint, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).mint.findUnique({
      where: {
        id: mint.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Profile, {
    nullable: false
  })
  async profile(@TypeGraphQL.Root() mint: Mint, @TypeGraphQL.Ctx() ctx: any): Promise<Profile> {
    return getPrismaFromContext(ctx).mint.findUnique({
      where: {
        id: mint.id,
      },
    }).profile({});
  }
}

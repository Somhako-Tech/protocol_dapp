import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Profile } from "../models/Profile";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Mint", {
  isAbstract: true
})
export class Mint {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  profile_id!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  approved!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  reviewed_by!: string;

  user?: User;

  profile?: Profile;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MintCreateManyInput } from "../../../inputs/MintCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMintArgs {
  @TypeGraphQL.Field(_type => [MintCreateManyInput], {
    nullable: false
  })
  data!: MintCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

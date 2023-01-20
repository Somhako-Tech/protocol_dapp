import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MintWhereInput } from "../../../inputs/MintWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMintArgs {
  @TypeGraphQL.Field(_type => MintWhereInput, {
    nullable: true
  })
  where?: MintWhereInput | undefined;
}

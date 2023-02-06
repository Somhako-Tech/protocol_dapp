import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreditWhereInput } from "../../../inputs/CreditWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCreditArgs {
  @TypeGraphQL.Field(_type => CreditWhereInput, {
    nullable: true
  })
  where?: CreditWhereInput | undefined;
}

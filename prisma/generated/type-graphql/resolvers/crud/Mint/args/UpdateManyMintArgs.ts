import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MintUpdateManyMutationInput } from "../../../inputs/MintUpdateManyMutationInput";
import { MintWhereInput } from "../../../inputs/MintWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMintArgs {
  @TypeGraphQL.Field(_type => MintUpdateManyMutationInput, {
    nullable: false
  })
  data!: MintUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MintWhereInput, {
    nullable: true
  })
  where?: MintWhereInput | undefined;
}

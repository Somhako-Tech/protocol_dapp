import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MintOrderByWithRelationInput } from "../../../inputs/MintOrderByWithRelationInput";
import { MintWhereInput } from "../../../inputs/MintWhereInput";
import { MintWhereUniqueInput } from "../../../inputs/MintWhereUniqueInput";
import { MintScalarFieldEnum } from "../../../../enums/MintScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMintArgs {
  @TypeGraphQL.Field(_type => MintWhereInput, {
    nullable: true
  })
  where?: MintWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MintOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MintOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MintWhereUniqueInput, {
    nullable: true
  })
  cursor?: MintWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MintScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "profile_id" | "approved" | "reviewed_by"> | undefined;
}

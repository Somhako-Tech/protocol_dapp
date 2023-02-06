import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreditAvgAggregate } from "../outputs/CreditAvgAggregate";
import { CreditCountAggregate } from "../outputs/CreditCountAggregate";
import { CreditMaxAggregate } from "../outputs/CreditMaxAggregate";
import { CreditMinAggregate } from "../outputs/CreditMinAggregate";
import { CreditSumAggregate } from "../outputs/CreditSumAggregate";

@TypeGraphQL.ObjectType("CreditGroupBy", {
  isAbstract: true
})
export class CreditGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  orefid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  profile_id!: string;

  @TypeGraphQL.Field(_type => CreditCountAggregate, {
    nullable: true
  })
  _count!: CreditCountAggregate | null;

  @TypeGraphQL.Field(_type => CreditAvgAggregate, {
    nullable: true
  })
  _avg!: CreditAvgAggregate | null;

  @TypeGraphQL.Field(_type => CreditSumAggregate, {
    nullable: true
  })
  _sum!: CreditSumAggregate | null;

  @TypeGraphQL.Field(_type => CreditMinAggregate, {
    nullable: true
  })
  _min!: CreditMinAggregate | null;

  @TypeGraphQL.Field(_type => CreditMaxAggregate, {
    nullable: true
  })
  _max!: CreditMaxAggregate | null;
}

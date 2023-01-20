import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferralAvgAggregate } from "../outputs/ReferralAvgAggregate";
import { ReferralCountAggregate } from "../outputs/ReferralCountAggregate";
import { ReferralMaxAggregate } from "../outputs/ReferralMaxAggregate";
import { ReferralMinAggregate } from "../outputs/ReferralMinAggregate";
import { ReferralSumAggregate } from "../outputs/ReferralSumAggregate";

@TypeGraphQL.ObjectType("ReferralGroupBy", {
  isAbstract: true
})
export class ReferralGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_id!: string;

  @TypeGraphQL.Field(_type => ReferralCountAggregate, {
    nullable: true
  })
  _count!: ReferralCountAggregate | null;

  @TypeGraphQL.Field(_type => ReferralAvgAggregate, {
    nullable: true
  })
  _avg!: ReferralAvgAggregate | null;

  @TypeGraphQL.Field(_type => ReferralSumAggregate, {
    nullable: true
  })
  _sum!: ReferralSumAggregate | null;

  @TypeGraphQL.Field(_type => ReferralMinAggregate, {
    nullable: true
  })
  _min!: ReferralMinAggregate | null;

  @TypeGraphQL.Field(_type => ReferralMaxAggregate, {
    nullable: true
  })
  _max!: ReferralMaxAggregate | null;
}

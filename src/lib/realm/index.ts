import { createRealmContext } from "@realm/react";
import { Historic } from "./schemas/History";

export const {
  RealmProvider,
  useRealm,
  useObject,
  useQuery,
} = createRealmContext({
  schema: [Historic]
});

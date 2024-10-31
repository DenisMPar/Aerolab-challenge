import { EmptyCollectionLogo } from "@/components/ui/icons/empty-collection";
import classes from "./index.module.css";
import { Title2, Title4 } from "@/components/ui/typography";
export function EmptyCollectionComponent() {
  return (
    <div className={classes.empty_collection__root}>
      <EmptyCollectionLogo />
      <div className={classes.empty_collection__text_container}>
        <Title2>Nothing collected yet</Title2>
        <Title4>Here you will see your collected games</Title4>
      </div>
    </div>
  );
}

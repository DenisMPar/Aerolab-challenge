"use client";
import { fetchApiGet } from "@/lib/api";
import Autocomplete from "@mui/material/Autocomplete";
import { debounce } from "@mui/material/utils";
import * as React from "react";
import { SearchInput } from "./input";
import { SearchGamesOption } from "./option";
import { SearchGamesPopper } from "./popper";
import { useToast } from "@/hooks/use-toast";

interface GameType {
  id: number;
  cover?: {
    id: number;
    url: string;
  };
  name: string;
  slug: string;
}

export function SearchGames() {
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [options, setOptions] = React.useState<readonly GameType[]>([]);
  const { toast } = useToast();

  const fetcher = React.useMemo(
    () =>
      debounce(async (input: string) => {
        if (!input) return;
        setLoading(true);
        try {
          const res = await fetchApiGet(`/game?query=${input}`);
          setOptions(res || []);
        } catch (error) {
          console.log("error on fetch :(", error);
          toast({
            title: "Error on search",
            description: "An error occurred while searching for games.",
            variant: "destructive",
          });
        } finally {
          setLoading(false);
        }
      }, 600),
    []
  );

  React.useEffect(() => {
    fetcher(inputValue);
  }, [inputValue, fetcher]);

  return (
    <Autocomplete
      sx={{ maxWidth: 352, width: "100%" }}
      PopperComponent={(props) => <SearchGamesPopper {...props} />}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.name
      }
      filterOptions={(x) => x}
      options={options}
      popupIcon={null}
      autoComplete
      includeInputInList
      inputValue={inputValue}
      noOptionsText="No games found"
      loadingText="Searching games..."
      loading={isLoading}
      onChange={() => {}}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      renderInput={(params) => (
        <SearchInput
          params={params}
          handleReset={() => {
            setInputValue("");
            setOptions([]);
          }}
          showClose={inputValue.length > 0}
        />
      )}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <SearchGamesOption
              gameName={option.name}
              coverUrl={option.cover ? `https:` + option.cover.url : ""}
              slug={option.slug}
            />
          </li>
        );
      }}
    />
  );
}

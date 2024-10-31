import {
  AutocompleteRenderInputParams,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Search, X } from "lucide-react";
import { useState } from "react";
export function SearchInput({
  params,
  handleReset,
  showClose = false,
}: {
  params: AutocompleteRenderInputParams;
  handleReset: () => void;
  showClose?: boolean;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextField
      {...params}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      slotProps={{
        input: {
          ...params.InputProps,
          type: "text",
          startAdornment: (
            <InputAdornment position="start">
              <Search
                style={{
                  color: isFocused ? "var(--violet-600)" : "var(--pink-100)",
                  width: 16,
                  height: 16,
                }}
              />
            </InputAdornment>
          ),
          endAdornment: showClose && (
            <InputAdornment position="end">
              <IconButton onClick={handleReset} edge="end">
                <X
                  style={{
                    color: "var(--gray-1000)",
                    width: 16,
                    height: 16,
                  }}
                />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      sx={{
        "& .MuiInputBase-root": {
          backgroundColor: "var(--gray-0)",
          borderRadius: isFocused ? "20px 20px 0 0" : "20px",
          height: "40px",
          border: "1px solid var(--pink-50)",
          fontFamily: "inherit",
          padding: "12px 16px !important",
          gap: "3px",
          outline: "none",
        },
        "& .MuiInputBase-input::placeholder": {
          color: "var(--pink-200)",
          opacity: 1,
        },
        "& .MuiInputAdornment-root": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
      placeholder="Search games..."
      fullWidth
    />
  );
}

import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

const CategoryTabs = ({ categories, selectedCategory, onSelectCategory }) => {
  const handleChange = (event, newValue) => {
    onSelectCategory(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs value={selectedCategory} onChange={handleChange} aria-label="video category tabs">
        {categories.map((category) => (
          <Tab key={category} label={category} value={category} />
        ))}
      </Tabs>
    </Box>
  );
};

export default CategoryTabs;

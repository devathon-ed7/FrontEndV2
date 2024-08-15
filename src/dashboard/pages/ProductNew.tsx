import { Breadcrumb } from "../components/Breadcrumb";
import {
  TextField,
  Box,
  Button,
  Typography,
  Grid
} from "@mui/material";
import { CardProductLayout } from "../layout/CardProductLayout";
import { useProductForm } from "../../hooks/useProductForm";
import { ImageUploadButton } from "../components/Products/ImageUploadButton";
import { useMemo } from "react";
import { CategorySelect } from "../components/Products/CategorySelect";

export const ProductNew = () => {
  const {
    name,
    setName,
    price,
    setPrice,
    stock,
    setStock,
    category,
    setCategory,
    imageUrl,
    onChangeUrl,
    handleSave,
  } = useProductForm();

  const categorySelect = useMemo(() => (
    <CategorySelect category={category} setCategory={setCategory} />
  ), [category, setCategory]);

  const imageUploadButton = useMemo(() => (
    <ImageUploadButton onChangeUrl={onChangeUrl} />
  ), [onChangeUrl]);

  return (
    <Box>
      <Breadcrumb />
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <form>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Button variant="contained" color="success" onClick={handleSave}>
                  <Typography color="white" sx={{ fontWeight: "bold" }}>
                    Guardar
                  </Typography>
                </Button>
              </Grid>
              <Grid item>
                <TextField
                  id="name"
                  label="Nombre de producto"
                  onChange={(e) => setName(e.target.value)}
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-number"
                  label="Precio"
                  type="number"
                  onChange={(e) => setPrice(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ step: "0.01" }}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-number"
                  label="Stock"
                  type="number"
                  onChange={(e) => setStock(parseInt(e.target.value))}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item>{categorySelect}</Grid>
              <Grid item>{imageUploadButton}</Grid>
            </Grid>
          </form>
        </Box>
        <CardProductLayout
          name={name}
          price={price}
          stock={stock}
          category={category}
          imageUrl={imageUrl}
        />
      </Box>
    </Box>
  );
};
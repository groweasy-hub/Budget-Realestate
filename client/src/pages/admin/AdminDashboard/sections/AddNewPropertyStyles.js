import styled from "styled-components";
import { Card } from "../AdminDashboardStyles";

export const AddPropertyGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.78fr) minmax(360px, 0.84fr);
  gap: 18px;

  @media (max-width: 1180px) {
    grid-template-columns: 1fr;
  }
`;

export const PropertyTypeChooser = styled.div`
  display: grid;
  gap: 18px;
`;

export const ChooserHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
`;

export const ChooserTitle = styled.h2`
  margin: 0;
  color: #15203a;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

export const ChooserText = styled.p`
  margin: 7px 0 0;
  color: #576177;
  font-size: 14px;
  font-weight: 500;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryCard = styled.button`
  min-height: 190px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 16px;
  padding: 24px;
  border: 1px solid ${({ $active }) => ($active ? "#0f8f43" : "#e0e6ee")};
  border-radius: 14px;
  text-align: left;
  background: ${({ $active }) => ($active ? "linear-gradient(135deg, #f0fbf4 0%, #ffffff 100%)" : "#ffffff")};
  box-shadow:
    0 10px 28px rgba(18, 31, 53, 0.06),
    0 0 0 ${({ $active }) => ($active ? "3px rgba(15,143,67,.08)" : "0 rgba(15,143,67,0)")};
  cursor: pointer;
`;

export const CategoryIcon = styled.div`
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  color: ${({ $color }) => $color};
  background: ${({ $bg }) => $bg};
`;

export const CategoryTitle = styled.div`
  color: #15203a;
  font-size: 18px;
  font-weight: 800;
`;

export const CategoryText = styled.div`
  margin-top: 8px;
  color: #576177;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.55;
`;

export const CategoryMeta = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: ${({ $active }) => ($active ? "#0f8f43" : "#647086")};
  font-size: 13px;
  font-weight: 800;
`;

export const SelectedBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 18px;
  border: 1px solid #dcefe3;
  border-radius: 12px;
  color: #15203a;
  background: #f4fbf7;
`;

export const ChangeTypeButton = styled.button`
  height: 36px;
  padding: 0 14px;
  border: 1px solid #cfe4d7;
  border-radius: 8px;
  color: #0f8f43;
  font-size: 13px;
  font-weight: 800;
  background: #ffffff;
`;

export const FormCard = styled(Card)`
  padding: 22px 24px 24px;
`;

export const SideCard = styled(Card)`
  padding: 22px 22px 24px;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 22px;
  color: #15203a;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.02em;
`;

export const FormSection = styled.section`
  & + & {
    margin-top: 22px;
    padding-top: 22px;
    border-top: 1px solid #edf1f5;
  }
`;

export const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns || 3}, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.label`
  display: block;
  color: #18233d;
  font-size: 13px;
  font-weight: 700;

  > input,
  > select,
  > textarea,
  > div {
    margin-top: 9px;
  }
`;

export const Required = styled.span`
  color: #ef3b3b;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  padding: 0 14px;
  border: 1px solid #d9e0e9;
  border-radius: 7px;
  color: #18233d;
  font-size: 14px;
  font-weight: 500;
  background: ${({ disabled }) => (disabled ? "#f7f9fb" : "#ffffff")};
  outline: 0;

  &::placeholder {
    color: #7d879a;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 42px;
  padding: 0 38px 0 14px;
  border: 1px solid #d9e0e9;
  border-radius: 7px;
  color: #18233d;
  font-size: 14px;
  font-weight: 600;
  background: #ffffff;
  appearance: none;
  outline: 0;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: ${({ $small }) => ($small ? "76px" : "78px")};
  resize: vertical;
  padding: 13px 14px;
  border: 1px solid #d9e0e9;
  border-radius: 7px;
  color: #18233d;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  outline: 0;

  &::placeholder {
    color: #7d879a;
  }
`;

export const FullWidth = styled.div`
  grid-column: 1 / -1;
`;

export const InputWithIcon = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  border: 1px solid #d9e0e9;
  border-radius: 7px;
  background: #ffffff;
  overflow: hidden;

  svg,
  span {
    flex: 0 0 auto;
    margin-left: 13px;
    color: #18233d;
  }

  input {
    height: 100%;
    width: 100%;
    border: 0;
    outline: 0;
    padding: 0 13px;
    color: #18233d;
    font-size: 14px;
    font-weight: 500;
    background: transparent;
  }

  input::placeholder {
    color: #7d879a;
  }
`;

export const UploadBox = styled.div`
  height: 214px;
  display: grid;
  place-items: center;
  padding: 18px;
  border: 1px dashed #cbd5e1;
  border-radius: 8px;
  text-align: center;
  color: #15203a;
  background: #ffffff;
`;

export const UploadInner = styled.div`
  display: grid;
  justify-items: center;
  gap: 9px;
  color: #15203a;
  font-size: 14px;
  font-weight: 700;

  small {
    color: #7d879a;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const BrowseButton = styled.button`
  height: 36px;
  padding: 0 18px;
  border: 1px solid #d9e0e9;
  border-radius: 7px;
  color: #006fe6;
  font-size: 13px;
  font-weight: 800;
  background: #ffffff;
`;

export const ThumbGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
  margin: 12px 0 22px;
`;

export const UploadThumb = styled.div`
  position: relative;
  height: 52px;
  display: grid;
  place-items: center;
  border: 1px solid #d9e0e9;
  border-radius: 7px;
  color: #98a3b5;
  background: #f8fafc;
  font-size: 13px;
  font-weight: 800;

  button {
    position: absolute;
    top: 4px;
    right: 5px;
    color: #a5afbf;
    font-size: 13px;
    background: transparent;
  }
`;

export const GalleryUploadList = styled.div`
  display: grid;
  gap: 12px;
  margin: 14px 0 22px;
`;

export const GalleryUploadRow = styled.div`
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid #d9e0e9;
  border-radius: 8px;
  background: #ffffff;
`;

export const GalleryImageBox = styled.div`
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border: 1px solid #d9e0e9;
  border-radius: 7px;
  color: #98a3b5;
  background: #f8fafc;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const SmallActionButton = styled.button`
  height: 34px;
  padding: 0 12px;
  border: 1px solid ${({ $danger }) => ($danger ? "#ffd4d4" : "#d9e0e9")};
  border-radius: 7px;
  color: ${({ $danger }) => ($danger ? "#e53935" : "#006fe6")};
  font-size: 12px;
  font-weight: 800;
  background: #ffffff;
`;

export const HelperText = styled.div`
  color: #98a3b5;
  font-size: 12px;
  font-weight: 500;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

export const Tag = styled.span`
  height: 28px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px;
  border-radius: 6px;
  color: #168243;
  font-size: 12px;
  font-weight: 800;
  background: #dff7e6;
`;

export const SideDivider = styled.div`
  height: 1px;
  margin: 18px 0;
  background: #edf1f5;
`;

export const CompactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const SplitInput = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 116px;
  height: 42px;
  border: 1px solid #d9e0e9;
  border-radius: 7px;
  overflow: hidden;

  input,
  select {
    border: 0;
    outline: 0;
    padding: 0 12px;
    color: #18233d;
    font-size: 14px;
    background: #ffffff;
  }

  select {
    border-left: 1px solid #edf1f5;
  }
`;

export const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 4px;
  color: #18233d;
  font-size: 14px;
  font-weight: 700;
`;

export const Switch = styled.button`
  width: 43px;
  height: 24px;
  position: relative;
  border-radius: 999px;
  background: #0f8f43;

  &::after {
    content: "";
    position: absolute;
    top: 3px;
    right: 3px;
    width: 18px;
    height: 18px;
    border-radius: 999px;
    background: #ffffff;
    box-shadow: 0 1px 4px rgba(17, 29, 48, 0.22);
  }
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 22px;
`;

export const CancelButton = styled.button`
  height: 44px;
  min-width: 104px;
  padding: 0 24px;
  border: 1px solid #d9e0e9;
  border-radius: 7px;
  color: #18233d;
  font-size: 14px;
  font-weight: 700;
  background: #ffffff;
`;

export const SaveButton = styled.button`
  height: 44px;
  min-width: 150px;
  padding: 0 24px;
  border-radius: 7px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 800;
  background: linear-gradient(180deg, #119247 0%, #0e853f 100%);
`;

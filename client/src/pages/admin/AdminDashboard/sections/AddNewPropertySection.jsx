import { useState } from "react";
import {
  AddPropertyGrid,
  BrowseButton,
  CancelButton,
  CategoryCard,
  CategoryGrid,
  CategoryIcon,
  CategoryMeta,
  CategoryText,
  CategoryTitle,
  ChangeTypeButton,
  ChooserHeader,
  ChooserText,
  ChooserTitle,
  CompactGrid,
  Field,
  FieldsGrid,
  FormActions,
  FormCard,
  FormSection,
  FullWidth,
  GalleryImageBox,
  GalleryUploadList,
  GalleryUploadRow,
  HelperText,
  HiddenFileInput,
  Input,
  InputWithIcon,
  PropertyTypeChooser,
  Required,
  SaveButton,
  SectionTitle,
  SelectedBanner,
  Select,
  SideCard,
  SideDivider,
  SmallActionButton,
  SplitInput,
  Switch,
  Tag,
  TagRow,
  Textarea,
  ThumbGrid,
  ToggleRow,
  UploadBox,
  UploadInner,
  UploadThumb,
} from "./AddNewPropertyStyles";

const propertyCategories = [
  {
    id: "buy",
    title: "Buy Property",
    description:
      "Add apartments, villas, plots, commercial spaces, and other properties listed for sale.",
    color: "#0f8f43",
    bg: "#e2f7ea",
  },
  {
    id: "rent",
    title: "Rent Property",
    description:
      "Add rental homes, offices, shops, and monthly lease properties with tenant-ready details.",
    color: "#176cf0",
    bg: "#e8f1ff",
  },
  {
    id: "auction",
    title: "Auction Property",
    description:
      "Add bank auction, direct auction, and bidding properties with auction timing and bid rules.",
    color: "#ff850f",
    bg: "#fff0dc",
  },
];

const buyAmenities = [
  { key: "pool", label: "Swimming Pool" },
  { key: "club", label: "Club House" },
  { key: "gym", label: "Gym & Fitness" },
  { key: "play", label: "Children Play Area" },
  { key: "track", label: "Jogging Track" },
  { key: "security", label: "24/7 Security" },
  { key: "backup", label: "Power Backup" },
  { key: "ev", label: "EV Charging" },
];

const defaultAboutPoints = [
  "Premium villa community",
  "Spacious living & dining areas",
  "Private garden & terrace",
  "Clubhouse & modern amenities",
  "24/7 security & CCTV surveillance",
  "Excellent connectivity",
];

const defaultLocationAdvantages = [
  { place: "Financial District", time: "10 min" },
  { place: "HITEC City", time: "15 min" },
  { place: "Rajiv Gandhi International Airport", time: "25 min" },
  { place: "Outer Ring Road", time: "5 min" },
  { place: "Top Schools & Colleges", time: "7 min" },
];

const defaultWhyPoints = [
  "Verified Property & Ownership",
  "All Legal Documents Checked",
  "Price Benchmark Verified",
  "RERA Registered Project",
  "Site Inspection Available",
  "Bank Loan Assistance Available",
];

const rentAboutPoints = [
  "Gated community",
  "24/7 security & CCTV surveillance",
  "Power backup",
  "Dedicated parking",
  "Close to metro, schools & hospitals",
];

const rentLocationAdvantages = [
  { place: "Jubilee Hills Check Post", time: "3 min" },
  { place: "Yusufguda Metro Station", time: "7 min" },
  { place: "KBR Park", time: "10 min" },
  { place: "Apollo Hospital", time: "12 min" },
  { place: "HITEC City", time: "15 min" },
  { place: "Rajiv Gandhi International Airport", time: "35 min" },
];

const rentSummaryItems = [
  { label: "Monthly Rent", value: "Rs 65,000" },
  { label: "Maintenance", value: "Rs 5,000" },
  { label: "Security Deposit", value: "Rs 1,30,000" },
  { label: "Lock-in Period", value: "11 Months" },
  { label: "Notice Period", value: "1 Month" },
];

const nearbyEssentials = [
  { label: "Supermarket", time: "5 min", icon: "cart" },
  { label: "School", time: "6 min", icon: "school" },
  { label: "Hospital", time: "8 min", icon: "hospital" },
  { label: "Metro Station", time: "7 min", icon: "metro" },
  { label: "Restaurant", time: "4 min", icon: "restaurant" },
  { label: "Mall", time: "10 min", icon: "mall" },
];

const localityTags = ["Safe & Secure", "Premium Locality", "Great Connectivity"];

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="4.5"
        width="17"
        height="16"
        rx="2.2"
        stroke="#18233D"
        strokeWidth="1.7"
      />
      <path
        d="M7 2.8v3.4M17 2.8v3.4M3.5 9h17"
        stroke="#18233D"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.2" stroke="#647086" strokeWidth="1.8" />
      <path
        d="M12 7.8v4.7l3.2 2"
        stroke="#647086"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M18 31.5h-3.8A8.2 8.2 0 0 1 13 15.2 11 11 0 0 1 33.8 18 6.8 6.8 0 0 1 34 31.5h-4"
        stroke="#98A3B5"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 34V20M18.5 25.5 24 20l5.5 5.5"
        stroke="#98A3B5"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 18.5c1.9-3 3.4-4.5 4.7-4.5 1.1 0 1.9.9 2.7 1.8.7-.9 1.5-1.5 2.5-1.5 1.2 0 2.5 1.2 4.1 4.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function CategorySvg({ type }) {
  const common = {
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const paths = {
    buy: (
      <>
        <path d="M4 11.2 12 4l8 7.2" {...common} />
        <path d="M6.4 10.2V20h11.2v-9.8" {...common} />
        <path d="M10 20v-5.5h4V20" {...common} />
      </>
    ),
    rent: (
      <>
        <rect x="5" y="4" width="10" height="16" rx="1.6" {...common} />
        <path
          d="M15 9h4v11h-4M8 8h1M11 8h1M8 12h1M11 12h1M8 16h1M11 16h1"
          {...common}
        />
      </>
    ),
    auction: (
      <>
        <path d="m11.2 4 8.2 8.2-1.85 1.85L9.35 5.85 11.2 4Z" {...common} />
        <path
          d="m7.75 8.75 7.5 7.5M4.5 14.4l5.1 5.1M3.7 18.4l4.1-4.1"
          {...common}
        />
      </>
    ),
  };

  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

function BuyPropertyForm() {
  const [amenities, setAmenities] = useState(buyAmenities.map((amenity) => amenity.label));
  const [amenityInput, setAmenityInput] = useState("");
  const [galleryImages, setGalleryImages] = useState([{ id: 1, label: "", fileName: "" }]);

  const handleAddAmenity = () => {
    const nextAmenity = amenityInput.trim();

    if (!nextAmenity || amenities.some((amenity) => amenity.toLowerCase() === nextAmenity.toLowerCase())) {
      return;
    }

    setAmenities((current) => [...current, nextAmenity]);
    setAmenityInput("");
  };

  const handleAddImage = () => {
    setGalleryImages((current) => {
      if (current.length >= 6) {
        return current;
      }

      return [...current, { id: Date.now(), label: "", fileName: "" }];
    });
  };

  const handleRemoveImage = (imageId) => {
    setGalleryImages((current) => {
      if (current.length <= 1) {
        return current;
      }

      return current.filter((image) => image.id !== imageId);
    });
  };

  const handleImageLabelChange = (imageId, value) => {
    setGalleryImages((current) =>
      current.map((image) => (image.id === imageId ? { ...image, label: value } : image)),
    );
  };

  const handleImageFileChange = (imageId, file) => {
    setGalleryImages((current) =>
      current.map((image) => (image.id === imageId ? { ...image, fileName: file?.name || "" } : image)),
    );
  };

  return (
    <>
      <AddPropertyGrid>
        <FormCard>
          <FormSection>
            <SectionTitle>Buy Property Details</SectionTitle>
            <FieldsGrid>
              <Field>
                Property Title <Required>*</Required>
                <Input placeholder="Eg: Skyline Crest Residences" />
              </Field>
              <Field>
                Category <Required>*</Required>
                <Select defaultValue="">
                  <option value="" disabled>Eg: Villas</option>
                  <option>Villas</option>
                  <option>Apartments</option>
                  <option>Commercial</option>
                  <option>Plots</option>
                  <option>Farm Lands</option>
                </Select>
              </Field>
              <Field>
                RERA Number<Required>*</Required>
                <Input placeholder="Eg: P02500003916" />
              </Field>
              <Field>
                Location Trail <Required>*</Required>
                <Input
                  placeholder="Eg: Banjara Hills, Hyderabad"
                />
              </Field>
              <Field>
                Location <Required>*</Required>
                <Input
                  placeholder="Eg: Banjara Hills, Hyderabad"
                />
              </Field>
              <Field>
                Price <Required>*</Required>
                <Input placeholder="Eg: Rs 4.5 Cr" />
              </Field>
              <Field>
                Rating
                <Input placeholder="Eg: 4.9" />
              </Field>
              <Field>
                Reviews
                <Input
                  placeholder="Eg: 128 Reviews"
                />
              </Field>
            </FieldsGrid>
          </FormSection>

          <FormSection>
            <SectionTitle>Property Specs</SectionTitle>
            <FieldsGrid $columns={4}>
              <Field>
                BHK <Required>*</Required>
                <Input placeholder="Eg: 4" />
              </Field>
              <Field>
                Area <Required>*</Required>
                <Input placeholder="Eg: 3200" />
              </Field>
              <Field>
                Type <Required>*</Required>
                <Input
                  placeholder="Eg: Villa"
                />
              </Field>
              <Field>
                Possession <Required>*</Required>
                <Input
                  placeholder="Eg: Ready"
                />
              </Field>
            </FieldsGrid>
          </FormSection>

          <FormSection>
            <SectionTitle>About Property</SectionTitle>
            <FullWidth>
              <Field>
                About Description <Required>*</Required>
                <Textarea placeholder="Eg: Skyline Crest Residences offers premium 4 BHK villas designed for a luxurious lifestyle. With world-class amenities, landscaped gardens, and excellent connectivity to major business hubs, this is where comfort meets convenience." />
              </Field>
            </FullWidth>

            <FieldsGrid $columns={2} style={{ marginTop: 20 }}>
              {defaultAboutPoints.map((point, index) => (
                <Field key={point}>
                  About Point {index + 1}
                  <Input placeholder={`Eg: ${point}`} />
                </Field>
              ))}
            </FieldsGrid>
          </FormSection>

          <FormSection>
            <SectionTitle>Why Choose This Property?</SectionTitle>
            <FieldsGrid $columns={2}>
              {defaultWhyPoints.map((point, index) => (
                <Field key={point}>
                  Why Point {index + 1}
                  <Input placeholder={`Eg: ${point}`} />
                </Field>
              ))}
            </FieldsGrid>
          </FormSection>

          <FormSection>
            <SectionTitle>Location Advantages</SectionTitle>
            <FieldsGrid $columns={2}>
              {defaultLocationAdvantages.map((item, index) => (
                <Field key={item.place}>
                  Advantage {index + 1}
                  <SplitInput>
                    <input placeholder={`Eg: ${item.place}`} />
                    <input placeholder={`Eg: ${item.time}`} />
                  </SplitInput>
                </Field>
              ))}
            </FieldsGrid>
          </FormSection>
        </FormCard>

        <div>
          <SideCard>
            <SectionTitle>Property Images</SectionTitle>
            <UploadBox>
              <UploadInner>
                <UploadIcon />
                <div>Drag & drop images here</div>
                <small>or</small>
                <BrowseButton type="button" onClick={handleAddImage} disabled={galleryImages.length >= 6}>
                  Add Image
                </BrowseButton>
                <small>Minimum 1 image and maximum 6 images</small>
              </UploadInner>
            </UploadBox>
            <GalleryUploadList>
              {galleryImages.map((image, index) => (
                <GalleryUploadRow key={image.id}>
                  <GalleryImageBox><ImageIcon /></GalleryImageBox>
                  <Input
                    value={image.label}
                    onChange={(event) => handleImageLabelChange(image.id, event.target.value)}
                    placeholder={index === 0 ? "Eg: Exterior View" : "Eg: Bedroom"}
                  />
                  <label>
                    <HiddenFileInput
                      type="file"
                      accept="image/*"
                      onChange={(event) => handleImageFileChange(image.id, event.target.files?.[0])}
                    />
                    <SmallActionButton as="span">{image.fileName ? "Change Image" : "Upload Image"}</SmallActionButton>
                  </label>
                  <SmallActionButton
                    type="button"
                    $danger
                    disabled={galleryImages.length <= 1}
                    onClick={() => handleRemoveImage(image.id)}
                  >
                    x
                  </SmallActionButton>
                  {image.fileName ? (
                    <HelperText style={{ gridColumn: "2 / -1", marginTop: -4 }}>{image.fileName}</HelperText>
                  ) : null}
                </GalleryUploadRow>
              ))}
            </GalleryUploadList>
            <HelperText>
              Add image name/type for every uploaded image. {6 - galleryImages.length} slots remaining.
            </HelperText>

            <SectionTitle>Amenities</SectionTitle>
            <CompactGrid>
              {amenities.map((amenity) => (
                <Field
                  key={amenity}
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  <input
                    type="checkbox"
                    style={{ width: 16, height: 16, accentColor: "#0f8f43" }}
                  />
                  {amenity}
                </Field>
              ))}
            </CompactGrid>
            <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
              <Input
                value={amenityInput}
                onChange={(event) => setAmenityInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    handleAddAmenity();
                  }
                }}
                placeholder="Eg: Indoor Games"
              />
              <BrowseButton type="button" onClick={handleAddAmenity}>Add</BrowseButton>
            </div>
            <HelperText style={{ marginTop: 10 }}>Enter a custom amenity and click Add.</HelperText>
          </SideCard>
        </div>
      </AddPropertyGrid>

      <FormActions>
        <CancelButton type="button">Cancel</CancelButton>
        <SaveButton type="button">Save Buy Property</SaveButton>
      </FormActions>
    </>
  );
}

function RentPropertyForm() {
  return (
    <>
      <AddPropertyGrid>
        <FormCard>
          <FormSection>
            <SectionTitle>Rent Property Details</SectionTitle>
            <FieldsGrid>
              <Field>
                Property Title <Required>*</Required>
                <Input placeholder="Eg: Park View Heights" />
              </Field>
              <Field>
                Category <Required>*</Required>
                <Select defaultValue="">
                  <option value="" disabled>Eg: Apartment</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Independent House</option>
                  <option>Commercial</option>
                </Select>
              </Field>
              <Field>
                Property Code <Required>*</Required>
                <Input placeholder="Eg: RH-5632" />
              </Field>
              <Field>
                Location Trail <Required>*</Required>
                <Input placeholder="Eg: Jubilee Hills, Hyderabad" />
              </Field>
              <Field>
                Location <Required>*</Required>
                <Input placeholder="Eg: Jubilee Hills, Hyderabad" />
              </Field>
              <Field>
                Monthly Rent <Required>*</Required>
                <Input placeholder="Eg: Rs 65,000" />
              </Field>
              <Field>
                Price Suffix
                <Input placeholder="Eg: /month" />
              </Field>
              <Field>
                Maintenance Note
                <Input placeholder="Eg: Maintenance: Rs 5,000 (Included)" />
              </Field>
              <Field>
                Rating
                <Input placeholder="Eg: 4.8" />
              </Field>
              <Field>
                Reviews
                <Input placeholder="Eg: 96 Reviews" />
              </Field>
            </FieldsGrid>
          </FormSection>

          <FormSection>
            <SectionTitle>Rental Specs</SectionTitle>
            <FieldsGrid $columns={4}>
              <Field>
                BHK <Required>*</Required>
                <Input placeholder="Eg: 3" />
              </Field>
              <Field>
                Area <Required>*</Required>
                <Input placeholder="Eg: 1800" />
              </Field>
              <Field>
                Type <Required>*</Required>
                <Input placeholder="Eg: Apartment" />
              </Field>
              <Field>
                Furnishing <Required>*</Required>
                <Input placeholder="Eg: Semi Furnished" />
              </Field>
            </FieldsGrid>
          </FormSection>

          <FormSection>
            <SectionTitle>About Rental Property</SectionTitle>
            <FullWidth>
              <Field>
                About Description <Required>*</Required>
                <Textarea placeholder="Eg: Spacious 3 BHK apartment for rent in the prime location of Jubilee Hills. Well-ventilated rooms, modern interiors, and excellent connectivity to major hubs of Hyderabad." />
              </Field>
            </FullWidth>
            <FieldsGrid $columns={2} style={{ marginTop: 20 }}>
              {rentAboutPoints.map((point, index) => (
                <Field key={point}>
                  About Point {index + 1}
                  <Input placeholder={`Eg: ${point}`} />
                </Field>
              ))}
            </FieldsGrid>
          </FormSection>

          <FormSection>
            <SectionTitle>Location Advantages</SectionTitle>
            <FieldsGrid $columns={2}>
              {rentLocationAdvantages.map((item, index) => (
                <Field key={item.place}>
                  Advantage {index + 1}
                  <SplitInput>
                    <input placeholder={`Eg: ${item.place}`} />
                    <input placeholder={`Eg: ${item.time}`} />
                  </SplitInput>
                </Field>
              ))}
            </FieldsGrid>
          </FormSection>

          <FormSection>
            <SectionTitle>Rent Summary</SectionTitle>
            <FieldsGrid $columns={2}>
              {rentSummaryItems.map((item) => (
                <Field key={item.label}>
                  {item.label}
                  <Input placeholder={`Eg: ${item.value}`} />
                </Field>
              ))}
            </FieldsGrid>
          </FormSection>
        </FormCard>

        <div>
          <SideCard>
            <SectionTitle>Property Images</SectionTitle>
            <UploadBox>
              <UploadInner>
                <UploadIcon />
                <div>Drag & drop images here</div>
                <small>or</small>
                <BrowseButton type="button">Upload Image</BrowseButton>
                <small>Upload rental property gallery images</small>
              </UploadInner>
            </UploadBox>

            <SectionTitle>Nearby Essentials</SectionTitle>
            <CompactGrid>
              {nearbyEssentials.map((item) => (
                <Field key={item.label}>
                  {item.label}
                  <SplitInput>
                    <input placeholder={`Eg: ${item.time}`} />
                    <input placeholder={`Eg: ${item.icon}`} />
                  </SplitInput>
                </Field>
              ))}
            </CompactGrid>

            <SideDivider />
            <SectionTitle>Locality Details</SectionTitle>
            <Field>
              Locality Description
              <Textarea $small placeholder="Eg: Jubilee Hills is one of the most sought-after residential areas in Hyderabad, known for its greenery, upscale lifestyle, and excellent connectivity." />
            </Field>
            <TagRow>
              {localityTags.map((tag) => (
                <Tag key={tag}>Eg: {tag}</Tag>
              ))}
            </TagRow>
            <HelperText style={{ marginTop: 10 }}>Use these as examples for locality tags.</HelperText>
          </SideCard>
        </div>
      </AddPropertyGrid>

      <FormActions>
        <CancelButton type="button">Cancel</CancelButton>
        <SaveButton type="button">Save Rent Property</SaveButton>
      </FormActions>
    </>
  );
}

function AddNewPropertySection() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const selectedCategoryData = propertyCategories.find(
    (item) => item.id === selectedCategory,
  );

  return (
    <>
      <PropertyTypeChooser>
        <ChooserHeader>
          <div>
            <ChooserTitle>
              What type of property do you want to add?
            </ChooserTitle>
            <ChooserText>
              Choose a category first. The form will adjust for buy, rent, or
              auction details.
            </ChooserText>
          </div>
        </ChooserHeader>

        <CategoryGrid>
          {propertyCategories.map((category) => (
            <CategoryCard
              key={category.id}
              type="button"
              $active={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              <CategoryIcon $color={category.color} $bg={category.bg}>
                <CategorySvg type={category.id} />
              </CategoryIcon>
              <div>
                <CategoryTitle>{category.title}</CategoryTitle>
                <CategoryText>{category.description}</CategoryText>
              </div>
              <CategoryMeta $active={selectedCategory === category.id}>
                {selectedCategory === category.id
                  ? "Selected"
                  : "Select this type"}
                <span>→</span>
              </CategoryMeta>
            </CategoryCard>
          ))}
        </CategoryGrid>

        {selectedCategoryData ? (
          <SelectedBanner>
            <div>
              <strong>{selectedCategoryData.title} form selected</strong>
              <ChooserText style={{ margin: "4px 0 0" }}>
                You can continue with the current form. Separate category forms
                can be added next.
              </ChooserText>
            </div>
            <ChangeTypeButton
              type="button"
              onClick={() => setSelectedCategory("")}
            >
              Change Type
            </ChangeTypeButton>
          </SelectedBanner>
        ) : null}
      </PropertyTypeChooser>

      {selectedCategory ? (
        selectedCategory === "buy" ? (
          <BuyPropertyForm />
        ) : selectedCategory === "rent" ? (
          <RentPropertyForm />
        ) : (
          <>
            <AddPropertyGrid>
              <FormCard>
                <FormSection>
                  <SectionTitle>Property Information</SectionTitle>
                  <FieldsGrid>
                    <Field>
                      Property Title <Required>*</Required>
                      <Input placeholder="Eg: Skyline Crest Residences" />
                    </Field>
                    <Field>
                      Property Type <Required>*</Required>
                      <Select defaultValue="">
                        <option value="" disabled>
                          Select property type
                        </option>
                      </Select>
                    </Field>
                    <Field>
                      Property ID <Required>*</Required>
                      <Input placeholder="Eg: Auto generated by backend" disabled />
                    </Field>
                  </FieldsGrid>

                  <FieldsGrid $columns={4} style={{ marginTop: 22 }}>
                    <Field>
                      Location <Required>*</Required>
                      <Input placeholder="Eg: Banjara Hills" />
                    </Field>
                    <Field>
                      City <Required>*</Required>
                      <Input placeholder="Eg: Hyderabad" />
                    </Field>
                    <Field>
                      State <Required>*</Required>
                      <Select defaultValue="">
                        <option value="" disabled>
                          Select state
                        </option>
                      </Select>
                    </Field>
                    <Field>
                      Pincode <Required>*</Required>
                      <Input placeholder="Eg: 500034" />
                    </Field>
                    <FullWidth>
                      <Field>
                        Address
                        <Textarea $small placeholder="Eg: Road No. 12, Banjara Hills, Hyderabad" />
                      </Field>
                    </FullWidth>
                  </FieldsGrid>

                  <FieldsGrid $columns={2} style={{ marginTop: 22 }}>
                    <Field>
                      Landmark (Optional)
                      <Input placeholder="Eg: Near City Center Mall" />
                    </Field>
                    <Field>
                      Google Map Location (Optional)
                      <Input placeholder="Eg: https://maps.google.com/..." />
                    </Field>
                  </FieldsGrid>
                </FormSection>

                <FormSection>
                  <SectionTitle>Auction Details</SectionTitle>
                  <FieldsGrid $columns={4}>
                    <Field>
                      Auction Date <Required>*</Required>
                      <InputWithIcon>
                        <CalendarIcon />
                        <input placeholder="Eg: 25 May 2026" />
                      </InputWithIcon>
                    </Field>
                    <Field>
                      Auction Time <Required>*</Required>
                      <InputWithIcon>
                        <ClockIcon />
                        <input placeholder="Eg: 10:30 AM" />
                      </InputWithIcon>
                    </Field>
                    <Field>
                      Bid Status <Required>*</Required>
                      <Select defaultValue="">
                        <option value="" disabled>
                          Select bid status
                        </option>
                      </Select>
                    </Field>
                    <Field>
                      Starting Price <Required>*</Required>
                      <InputWithIcon>
                        <span>&#8377;</span>
                        <input placeholder="Eg: 45000000" />
                      </InputWithIcon>
                    </Field>
                    <Field>
                      Minimum Bid Increment <Required>*</Required>
                      <InputWithIcon>
                        <span>&#8377;</span>
                        <input placeholder="Eg: 50000" />
                      </InputWithIcon>
                    </Field>
                    <Field>
                      Reserve Price (Optional)
                      <InputWithIcon>
                        <span>&#8377;</span>
                        <input placeholder="Eg: 42000000" />
                      </InputWithIcon>
                    </Field>
                    <Field>
                      Earnest Money Deposit (EMD) <Required>*</Required>
                      <InputWithIcon>
                        <span>&#8377;</span>
                        <input placeholder="Eg: 500000" />
                      </InputWithIcon>
                    </Field>
                    <Field>
                      Registration Start Date <Required>*</Required>
                      <InputWithIcon>
                        <CalendarIcon />
                        <input placeholder="Eg: 18 May 2026" />
                      </InputWithIcon>
                    </Field>
                    <Field>
                      Registration End Date <Required>*</Required>
                      <InputWithIcon>
                        <CalendarIcon />
                        <input placeholder="Eg: 24 May 2026" />
                      </InputWithIcon>
                    </Field>
                    <Field>
                      Auction Type <Required>*</Required>
                      <Select defaultValue="">
                        <option value="" disabled>
                          Select auction type
                        </option>
                      </Select>
                    </Field>
                    <Field style={{ gridColumn: "span 2" }}>
                      Number of Bids Allowed
                      <Input placeholder="Eg: 10" />
                    </Field>
                    <FullWidth>
                      <Field>
                        Description
                        <Textarea placeholder="Eg: Premium villa with modern amenities, verified documents, and excellent connectivity." />
                      </Field>
                    </FullWidth>
                  </FieldsGrid>
                </FormSection>
              </FormCard>

              <div>
                <SideCard>
                  <SectionTitle>Property Images</SectionTitle>
                  <UploadBox>
                    <UploadInner>
                      <UploadIcon />
                      <div>Drag & drop images here</div>
                      <small>or</small>
                      <BrowseButton type="button">Browse Files</BrowseButton>
                      <small>Upload up to 10 images (JPG, PNG, WebP)</small>
                    </UploadInner>
                  </UploadBox>
                  <ThumbGrid>
                    {[1, 2, 3, 4].map((item) => (
                      <UploadThumb key={item}>
                        <button type="button">x</button>
                        <ImageIcon />
                      </UploadThumb>
                    ))}
                    <UploadThumb>+6</UploadThumb>
                  </ThumbGrid>

                  <SectionTitle>Property Highlights</SectionTitle>
                  <Input placeholder="Eg: Sea View, Corner Property, etc." />
                  <HelperText style={{ marginTop: 10 }}>
                    Press Enter to add more
                  </HelperText>
                  <TagRow>
                    {["Sea View", "Corner Property", "Gated Community"].map(
                      (tag) => (
                        <Tag key={tag}>{tag} x</Tag>
                      ),
                    )}
                  </TagRow>

                  <SideDivider />
                  <SectionTitle>Other Details</SectionTitle>
                  <CompactGrid>
                    <Field>
                      Area (Sq.ft / Sq.yd / Acre) <Required>*</Required>
                      <SplitInput>
                        <input placeholder="Eg: 3200" />
                        <select defaultValue="">
                          <option value="" disabled>Eg: Sq.ft</option>
                          <option>Sq.ft</option>
                        </select>
                      </SplitInput>
                    </Field>
                    <Field>
                      Bedrooms
                      <Select defaultValue="">
                        <option value="" disabled>
                          Select
                        </option>
                      </Select>
                    </Field>
                    <Field>
                      Bathrooms
                      <Select defaultValue="">
                        <option value="" disabled>
                          Select
                        </option>
                      </Select>
                    </Field>
                    <Field>
                      Furnishing
                      <Select defaultValue="">
                        <option value="" disabled>
                          Select
                        </option>
                      </Select>
                    </Field>
                    <Field>
                      Parking
                      <Select defaultValue="">
                        <option value="" disabled>
                          Select
                        </option>
                      </Select>
                    </Field>
                    <Field>
                      Age of Property
                      <Select defaultValue="">
                        <option value="" disabled>
                          Select
                        </option>
                      </Select>
                    </Field>
                  </CompactGrid>

                  <SideDivider />
                  <ToggleRow>
                    <span>Status</span>
                    <Switch type="button" aria-label="Active status" />
                    <span>Active</span>
                  </ToggleRow>
                </SideCard>
              </div>
            </AddPropertyGrid>

            <FormActions>
              <CancelButton type="button">Cancel</CancelButton>
              <SaveButton type="button">Save Property</SaveButton>
            </FormActions>
          </>
        )
      ) : null}
    </>
  );
}

export default AddNewPropertySection;

import CMS from "netlify-cms-app";

// Not reliably loaded by registerPreviewStyle, so import directly
// Add Previews
// Extend editor
//CMS.registerEditorComponent(ctaEditorConfig);

import { TagControl, TagPreview } from "../components/tagWidget";

CMS.registerWidget("tags", TagControl, TagPreview);

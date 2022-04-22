// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import project from "./project";
import technology from "./technology";
import hero from "./hero";
import experience from "./experience";
import contact from "./contact";
import profile_links from "./profile_links";
import skills from "./skills";
import blockContent from "./block_content";
import about from "./about";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    project,
    technology,
    hero,
    experience,
    contact,
    profile_links,
    skills,
    blockContent,
    about,
  ]),
});

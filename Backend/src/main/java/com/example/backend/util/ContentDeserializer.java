package com.example.backend.util;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ContentDeserializer extends JsonDeserializer<List<String>> {

    @Override
    public List<String> deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        JsonNode node = p.getCodec().readTree(p);
        List<String> result = new ArrayList<>();

        if (node.isTextual()) {
            // Ein einzelner String → als Liste mit einem Eintrag
            result.add(node.asText());
        } else if (node.isArray()) {
            // Array von Strings → als Liste übernehmen
            for (JsonNode element : node) {
                if (element.isTextual()) {
                    result.add(element.asText());
                }
            }
        } else if (!node.isNull()) {
            // Falls weder String noch Array → trotzdem absichern
            result.add(node.toString());
        }

        return result;
    }
}

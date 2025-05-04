package com.example.backend;

import com.example.backend.controller.BeitragController;
import com.example.backend.entity.Beitrag;
import com.example.backend.repository.BeitragRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class BeitragControllerTest {

    private final BeitragRepository beitragRepository = mock(BeitragRepository.class);
    private final BeitragController beitragController = new BeitragController(beitragRepository);

    @Test
    void testGetAll() {
        Beitrag beitrag1 = new Beitrag();
        beitrag1.setId(1L);
        Beitrag beitrag2 = new Beitrag();
        beitrag2.setId(2L);

        when(beitragRepository.findAll()).thenReturn(List.of(beitrag1, beitrag2));

        List<Beitrag> result = beitragController.getAll();

        assertNotNull(result);
        assertEquals(2, result.size());
        verify(beitragRepository, times(1)).findAll();
    }

    @Test
    void testGetById_Found() {
        Beitrag beitrag = new Beitrag();
        beitrag.setId(1L);

        when(beitragRepository.findById(1L)).thenReturn(Optional.of(beitrag));

        var response = beitragController.getById(1L);

        assertTrue(response.getStatusCode().is2xxSuccessful());
        assertNotNull(response.getBody());
        assertEquals(1L, response.getBody().getId());
        verify(beitragRepository, times(1)).findById(1L);
    }

    @Test
    void testGetById_NotFound() {
        when(beitragRepository.findById(1L)).thenReturn(Optional.empty());

        var response = beitragController.getById(1L);

        assertTrue(response.getStatusCode().is4xxClientError());
        assertNull(response.getBody());
        verify(beitragRepository, times(1)).findById(1L);
    }

    @Test
    void testCreate() {
        Beitrag beitrag = new Beitrag();
        beitrag.setId(1L);

        when(beitragRepository.save(beitrag)).thenReturn(beitrag);

        Beitrag result = beitragController.create(beitrag);

        assertNotNull(result);
        assertEquals(1L, result.getId());
        verify(beitragRepository, times(1)).save(beitrag);
    }

    @Test
    void testUpdate_Found() {
        Beitrag existing = new Beitrag();
        existing.setId(1L);
        existing.setTitle("Old Title");

        Beitrag input = new Beitrag();
        input.setTitle("New Title");

        when(beitragRepository.findById(1L)).thenReturn(Optional.of(existing));
        when(beitragRepository.save(existing)).thenReturn(existing);

        var response = beitragController.update(1L, input);

        assertTrue(response.getStatusCode().is2xxSuccessful());
        assertEquals("New Title", response.getBody().getTitle());
        verify(beitragRepository, times(1)).findById(1L);
        verify(beitragRepository, times(1)).save(existing);
    }

    @Test
    void testUpdate_NotFound() {
        Beitrag input = new Beitrag();
        input.setTitle("New Title");

        when(beitragRepository.findById(1L)).thenReturn(Optional.empty());

        var response = beitragController.update(1L, input);

        assertTrue(response.getStatusCode().is4xxClientError());
        verify(beitragRepository, times(1)).findById(1L);
        verify(beitragRepository, never()).save(any());
    }

    @Test
    void testDelete_Found() {
        when(beitragRepository.existsById(1L)).thenReturn(true);

        var response = beitragController.delete(1L);

        assertTrue(response.getStatusCode().is2xxSuccessful());
        verify(beitragRepository, times(1)).existsById(1L);
        verify(beitragRepository, times(1)).deleteById(1L);
    }

    @Test
    void testDelete_NotFound() {
        when(beitragRepository.existsById(1L)).thenReturn(false);

        var response = beitragController.delete(1L);

        assertTrue(response.getStatusCode().is4xxClientError());
        verify(beitragRepository, times(1)).existsById(1L);
        verify(beitragRepository, never()).deleteById(any());
    }
}
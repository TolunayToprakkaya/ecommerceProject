package com.springboot.ecommerceProject.service.Impl;

import com.springboot.ecommerceProject.model.productDetails.Estate;
import com.springboot.ecommerceProject.repository.productDetails.EstateRepository;
import com.springboot.ecommerceProject.service.EstateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service("estateService")
public class EstateServiceImpl implements EstateService {

    @Autowired
    private EstateRepository estateRepository;

    @Override
    public List<Estate> findAll() {
        return this.estateRepository.findAll();
    }

    @Override
    public Optional<Estate> findOneById(String id) {
        return this.estateRepository.findById(id);
    }

    @Transactional
    @Override
    public Estate save(Estate estate) {
        return this.estateRepository.save(estate);
    }

    @Transactional
    @Override
    public Estate update(Estate estate) {
        return this.estateRepository.save(estate);
    }

    @Transactional
    @Override
    public void delete(String id) {
        estateRepository.deleteById(id);
    }
}

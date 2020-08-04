package service;

import java.util.UUID;

import domain.Vendor;

public interface VendorInterface {

	public Vendor getVendorByID(UUID id);
	public int addVendorByID(Vendor vendor);
	public int updateVendorByID(Vendor vendor);
	public int deleteVendorByID(UUID id);
	
	public Vendor getVendorByName(String name);
	public int addVendorByName(Vendor vendor);
	public int updateVendorByName(Vendor vendor);
	public int deleteVendorByName(String name);
	
	public Vendor getVendorByEmail(String email);
	public int addVendorByEmail(Vendor vendor);
	public int updateVendorByEmail(Vendor vendor);
	public int deleteVendorByEmail(String email);
}


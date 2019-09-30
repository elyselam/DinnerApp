package com.company.data.dao;

import com.company.data.EmployeeRepository;
import com.company.models.EmployeeInfo;
import com.company.models.reimbursement;

import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;

public class EmpRepositoryImpl implements EmployeeRepository {

    private EmployeeInfo emp;
    private Connection conn = DriverManager.getConnection("jdbc:postgresql://henrydinh.cdrs9lfdhqu1.us-east-2.rds." +
            "amazonaws.com:5432/henrydb?user=henry_dinh&password=Henry8354392.");

    public EmpRepositoryImpl() throws SQLException {
        try{
            Statement statement = conn.createStatement();

            statement.execute("CREATE TABLE IF not EXISTS EmployeeAccount(EmployeeName TEXT,Password TEXT)");
            statement.execute("CREATE TABLE IF not EXISTS ReimbursementTable(EmployeeName TEXT, ReimbursementID INTEGER," +
                    "Type TEXT, Status TEXT,TotalAmount REAL, CreatedDate TEXT, " +
                    "SubmittedDate TEXT)");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public EmployeeInfo findUserName(String EmployeeName) {
        String sql = "SELECT * from EmployeeAccount where EmployeeName = '" + EmployeeName + "'";
        try {
            Statement statement = conn.createStatement();
            statement.execute(sql);

            ResultSet results = statement.getResultSet();
            if (results.next()){
                emp = new EmployeeInfo(results.getString("EmployeeName"), results.getString("Password"));
                return emp;
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }


    public EmployeeInfo findById(Integer integer) {
        return null;
    }

    public Collection<EmployeeInfo> findAll() {
        return null;
    }

    public void save(EmployeeInfo emp) {
        try{
            Statement statement = conn.createStatement();
            String sql = "INSERT INTO EmployeeAccount VALUES ('" + emp.getUserName() +"','" + emp.getPassword() + "')";
            statement.execute(sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }
    public void saveRequest(EmployeeInfo emp) {
        try{
            if (emp.getReimbursementID().size() >= 1){
                reimbursement request = emp.getReimbursementID().get(emp.getReimbursementID().size()-1);
                Statement statement = conn.createStatement();
                String sql = "INSERT INTO ReimbursementTable VALUES ('" + emp.getUserName() +"'," +
                        request.getReimbursementID() + ", '"+ request.getType() + "','" + request.getStatus() + "', "+
                        request.getTotalAmount() + ", '"+ request.getCreatedDate()+ "','" + request.getSubmittedDate()+ "')";
                statement.execute(sql);

            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    public void updateRequestDate(Integer reimbursementID) throws SQLException {
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        java.util.Date date = new Date();
        String valnow = formatter.format(date);
        String sql = "UPDATE ReimbursementTable SET SubmittedDate = '" + valnow + "' WHERE ReimbursementID = '" + reimbursementID
                + "'";
        Statement statement = conn.createStatement();
        statement.execute(sql);

    }
    public void updateRequest(Integer reimbursementID,String decision) throws SQLException {
        String sql = "UPDATE ReimbursementTable SET Status = '" + decision + "' WHERE ReimbursementID = '" + reimbursementID
                + "'";
        Statement statement = conn.createStatement();
        statement.execute(sql);

    }
    public void delete(String userName) {
    }
}
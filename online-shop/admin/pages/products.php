<?php
define('BASE_PATH', '../../');
require_once('../../logic/products.php');
$products = getProducts();
?>
  <body>
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper" style="height: 100%;">
      <?php require_once('../navbar.php'); ?>
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
                <div class="card"  style="overflow: auto;"  style="padding: 20 20;">
                  <div class="card-body">
                  <div style="display: flex;">
                  <h4 class="card-title">Products</h4>
                    <button style="right: 10%; position: fixed;" type="button" class="btn btn-primary"  onclick="location.href = './add-product.php';">
                              <i class="mdi mdi-database-plus"></i>
                              ADD product
                            </button>
                    </div>
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th> Name </th>
                          <th> Description </th>
                          <th> Image </th>
                          <th> Price </th>
                          <th> Bar_code </th>
                          <th> Size </th>
                          <th> Color </th>
                          <th> Category </th>
                          <th> Discount </th>
                          <th> Recent </th>
                          <th> Featured </th>
                          <th style="text-align: center;"> Actions </th>
                        </tr>
                      </thead>
                      <tbody>
                      <?php
                        foreach ($products as $product) {
                         ?>
                        <tr>
                         <td><?= $product['id'] ?> </td>
                          <td><?= $product['name'] ?></td>
                          <td style="font-size: xx-small;" > <?= $product['description'] ?> </td>
                          <td class="py-1">
                            <img src= "../../../<?= $product['image_url'] ?>" alt="image" />
                          </td>
                          <td><?= $product['price'] ?> </td>
                          <td> <?= $product['bar_code'] ?></td>
                          <td> <?= $product['size_name'] ?></td>
                          <td> <?= $product['color_name'] ?></td>
                          <td> <?= $product['category_name'] ?></td>
                          <td> <?= $product['discount'] ?></td>
                          <td> <?= $product['is_recent'] ?></td>
                          <td> <?= $product['is_featured'] ?></td>
                          <td> 
                            <button type="button" class="btn btn-warning">
                              <i class="mdi mdi-table-edit"></i>
                            </button>
                            <button type="button" class="btn btn-danger">
                              <i class="mdi mdi-delete"></i>
                            </button>
                        </td>
                        </tr>
                    <?php }?>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- content-wrapper ends -->
          <!-- partial:../../partials/_footer.html -->
          <!-- partial -->
        </div>
        <!-- main-panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
  </body>

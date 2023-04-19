require "test_helper"

class Example2ControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get example2_index_url
    assert_response :success
  end
end
